import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonChoice from "../Buttom/index";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../database/config";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ModalProps {
  children: React.ReactNode;
  id: object;
}
export default function BasicModal({ children, id }: ModalProps) {
  /*eslint-disable*/
  const [list, setList] = React.useState([{}]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const data = collection(db, "lista");
  const navigate = useNavigate();

  React.useEffect(() => {
    async function getList() {
      try {
        const dataShot = await getDocs(data);
        const dataList = dataShot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setList(dataList);
      } catch (error) {
        console.log("detalhes do erro: ", error);
      }
    }
    getList();
    /*eslint-disable*/
  }, []);

  const del = async (id: any) => {
    try {
      const stateDoc = doc(db, "lista", id);
      await deleteDoc(stateDoc);
    } catch (error) {
      console.log("erro gerado: ", error);
    } finally {
      handleClose();
      navigate("/PageList");
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>{children}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            Quer realmente remover o item?
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ButtonChoice
                onClick={() => del(id)}
                SX={{
                  color: "green",
                  border: "1px solid black",
                  backgroundColor: "transparent",
                  marginRight: "4rem",
                  marginTop: "2rem",
                  width: "4rem",
                  height: "3rem",
                }}
              >
                SIM
              </ButtonChoice>
              <ButtonChoice
                onClick={handleClose}
                SX={{
                  color: "red",
                  border: "1px solid black",
                  backgroundColor: "transparent",
                  marginTop: "2rem",
                  width: "4rem",
                  height: "3rem",
                }}
              >
                NÃO
              </ButtonChoice>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

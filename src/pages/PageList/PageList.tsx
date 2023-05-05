import { useEffect, useState } from "react";
import Input from "../../components/Input";
import * as S from "./styles";
import Buttom from "../../components/Buttom";
import { FaRegTrashAlt } from "react-icons/fa";
import ShowItem from "../../components/ShowItem";
import firebaseConfig from "../../database/config";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import { DivLoading } from "../../components/Loading/styles";

const PageList = () => {
  const [state, setState] = useState("");
  const [list, setList] = useState([{}]);
  const [validation, setValidation] = useState(true);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const data = collection(db, "lista");
  const navigate = useNavigate();

  useEffect(() => {
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
  const getList = async () => {
    const dataShot = await getDocs(data);
    const dataList = dataShot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setList(dataList);

    return navigate("/PageList");
  };

  const handleClick = async () => {
    setValidation(true);
    await addDoc(data, {
      state,
    });
    getList();
  };
  console.log(list.length);
  return (
    <S.ContainerPageList>
      <Buttom
        SX={{ backgroundColor: "#81cff3", color: "#28353b" }}
        onClick={() => getList()}
      >
        ATUALIZAR
      </Buttom>
      <div>
        <Input
          type="text"
          value={state}
          SX={{ width: "auto" }}
          onChange={(event) => setState(event.target.value)}
        />
        <Buttom onClick={handleClick} SX={{ width: "3rem", height: "2rem" }}>
          +
        </Buttom>
      </div>
      {validation && (
        <>
          <>
            {list.length !== 1 ? (
              list.map((item: any, index) => {
                return (
                  <ShowItem key={index}>
                    <span>{item.state && Object.values(item.state)}</span>
                    <Modal id={item.id}>
                      <FaRegTrashAlt
                        size={20}
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          marginBottom: "15px",
                        }}
                      />
                    </Modal>
                  </ShowItem>
                );
              })
            ) : (
              <div
                style={{
                  marginTop: "5rem",
                }}
              >
                <DivLoading />
              </div>
            )}
          </>
        </>
      )}
    </S.ContainerPageList>
  );
};

export default PageList;

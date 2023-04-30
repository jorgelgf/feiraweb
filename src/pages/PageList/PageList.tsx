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
  doc,
  deleteDoc,
} from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";

const PageList = () => {
  const [state, setState] = useState("");
  const [list, setList] = useState([{}]);
  const [validation, setValidation] = useState(true);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const data = collection(db, "lista");
  useEffect(() => {
    async function getList() {
      try {
        let dataShot = await getDocs(data);
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
  }, [data]);

  const handleClick = async () => {
    setValidation(true);
    await addDoc(data, {
      state,
    });
  };

  const handleClickDelete = async (id: any) => {
    const stateDoc = doc(db, "lista", id);
    await deleteDoc(stateDoc);
  };

  return (
    <S.ContainerPageList>
      <div>
        PRODUTO:
        <Input
          type="text"
          value={state}
          onChange={(event) => setState(event.target.value)}
        />
        <Buttom onClick={handleClick}>ADC</Buttom>
      </div>
      {validation && (
        <>
          <>
            {list &&
              list.map((item: any, index) => {
                return (
                  <ShowItem key={index}>
                    {item.state && Object.values(item.state)}
                    <FaRegTrashAlt
                      onClick={() => handleClickDelete(item.id)}
                      size={20}
                      style={{ cursor: "pointer" }}
                    />
                  </ShowItem>
                );
              })}
          </>
        </>
      )}
    </S.ContainerPageList>
  );
};

export default PageList;

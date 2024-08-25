import { useContext, useEffect, useState } from "react";
import { DocumentsHeader } from "../../components/Documents/Header/DocumentsHeader";
import { DocumentsMain } from "../../components/Documents/Main/DocumentsMain";
import { Greetings } from "../../components/Greetings/Greetings";

import "./PersonalPage.css";
import { useFetch } from "../../api";
import { getDocuments } from "../../api/requests/documents/requests";
import { IDocument } from "../../api/requests/documents/types";
import { Container } from "../../components/Container/Container";
import { getUser } from "../../api/requests/users/requests";
import { AppStateContext } from "../../states/AppState";

export const PersonalPage = () => {
  const { setUserData, user } = useContext(AppStateContext);
  const [documents, setDocuments] = useState<IDocument[]>([]);
  const { fetch: fetchDocuments, loading: loadingDocuments } = useFetch(
    getDocuments,
    []
  );
  const { fetch: fetchUser, loading: loadingUser } = useFetch(getUser, []);

  useEffect(() => {
    fetchUser().then((response) => {
      if (response) setUserData(response.data);
    });
    fetchDocuments().then((response) => {
      if (response) setDocuments(response.data);
    });
  }, []);

  return (
    <div className="personal-page" data-testid="personal-page">
      {loadingUser ? (
        <></>
      ) : (
        <Greetings fullName={user.name} className="mb-56px" />
      )}
      <Container className="pesonal-page__container">
        <DocumentsHeader />
        {loadingDocuments ? <></> : <DocumentsMain documents={documents} />}
      </Container>
    </div>
  );
};

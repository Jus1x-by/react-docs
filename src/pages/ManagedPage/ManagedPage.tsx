import { useContext, useEffect, useState } from "react";
import { DocumentsHeader } from "../../components/Documents/Header/DocumentsHeader";
import { DocumentsMain } from "../../components/Documents/Main/DocumentsMain";
import { Greetings } from "../../components/Greetings/Greetings";

import "./ManagedPage.css";
import { useFetch } from "../../api";
import { getDocuments } from "../../api/requests/documents/requests";
import { IDocument } from "../../api/requests/documents/types";
import { CareerGoal } from "../../components/CareerGoal/CareerGoal";
import { getPersonalUsers } from "../../api/requests/users/requests";
import { AppStateContext } from "../../states/AppState";
import { getGoals } from "../../api/requests/goals/requests";
import { Goal } from "../../api/requests/goals/types";

export const ManagedPage = () => {
  const { setUserData, user } = useContext(AppStateContext);
  const [documents, setDocuments] = useState<IDocument[]>([]);
  const [goals, setGoals] = useState<Goal[]>([]);

  const { fetch: fetchGoals } = useFetch(getGoals, []);
  const { fetch: fetchUser, loading: loadingUser } = useFetch(
    getPersonalUsers,
    []
  );
  const { fetch: fetchDocuments, loading: loadingDocuments } = useFetch(
    getDocuments,
    []
  );

  useEffect(() => {
    fetchUser().then((response) => {
      if (response) setUserData(response.data);
    });
    fetchDocuments().then((response) => {
      if (response)
        setDocuments(
          response.data.sort((f, s) => {
            return (
              new Date(f.created_at).getTime() -
              new Date(s.created_at).getTime()
            );
          })
        );
    });
    fetchGoals().then((response) => {
      if (response) setGoals(response.data);
    });
  }, []);

  return (
    <div className="managed-page">
      {loadingUser ? (
        <></>
      ) : (
        <Greetings fullName={user.name} className="mb-56px" />
      )}
      <div className="managed-page__container">
        <CareerGoal goal={goals[0]} />

        <div className="managed-page__documents-main">
          <DocumentsHeader />
          {loadingDocuments ? <></> : <DocumentsMain documents={documents} />}
        </div>
      </div>
    </div>
  );
};

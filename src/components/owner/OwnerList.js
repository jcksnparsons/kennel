import React, { useEffect, useState } from "react";
import OwnerManager from "../../modules/OwnerManager";
import OwnerCard from "./OwnerCard";

const OwnerList = () => {
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    return OwnerManager.getAll().then(ownersFromAPI => {
      // We'll do something more interesting with this data soon.
      setOwners(ownersFromAPI);
    });
  };

  useEffect(() => {
    getOwners();
  }, []);

  const deleteOwner = id => {
    OwnerManager.delete(id).then(() => {
      OwnerManager.getAll().then(setOwners)
    })
  }

  return (
    <div className="container-cards">
      {owners.map(owner => (
        <OwnerCard key={owner.id} owner={owner} deleteOwner={deleteOwner}/>
      ))}
    </div>
  );
};

export default OwnerList;
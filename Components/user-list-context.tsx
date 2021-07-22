import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

const UserListContext = createContext({
  usersList: [],
  filteredUsersList: [],
  onDeletUser: (deletUserId: number) => {},
  onAddUser: (newUserObj: any) => {},
  onSearch: (searchName: string) => {},
});

export const UserListContextProvider = (props: any) => {
  const [usersList, setUsersList] = useState<any>(null);
  const [filteredUsersList, setFilteredUsersList] = useState<any>(null);
  const [newUserId, setNewUserId] = useState<number>(50);
  const [searchName, setSearchName] = useState<string>('');
  


  const URL = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios.get(URL).then(response => {
      const fetchUserArray = response.data;
      let tempUserArray: any = [];
      for (let i = 0; i < 50; i++) {
        tempUserArray.push({...fetchUserArray[i % 10]});
        tempUserArray[i].id = i + 1;
      }
      setUsersList(tempUserArray);
    });
  }, []);

  useEffect(() => {
    if (usersList) {
      const tempArray = usersList.filter((user: any) =>
        user.name.toLowerCase().includes(searchName.toLowerCase()),
      );
      setFilteredUsersList(tempArray);
    }
  }, [usersList, searchName]);

  const deletUserHandler = (deletUserId: number) => {
    setUsersList([...usersList.filter((user: any) => user.id !== deletUserId)]);
  };
  const addNewUserHandler = (newUserObj: any) => {
    usersList.unshift({id: newUserId, ...newUserObj});
    setUsersList([...usersList]);
    setNewUserId(prevUserId => prevUserId + 1);
  };
  const searchByNameHandler = (searchName: string) => {
    setSearchName(searchName);
  };

  return (
    <UserListContext.Provider
      value={{
        usersList: usersList,
        filteredUsersList: filteredUsersList,
        onDeletUser: deletUserHandler,
        onAddUser: addNewUserHandler,
        onSearch: searchByNameHandler,
      }}>
      {props.children}
    </UserListContext.Provider>
  );
};

export default UserListContext;

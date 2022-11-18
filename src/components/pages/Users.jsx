import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
const users = [...Array(10).keys()].map((i) => {
  return {
    id: i,
    image: "https://source.unsplash.com/Mv9hjnEUHR4",
    name: `佐伯${i}`,
    email: "1111@gmail.com",
    phone: "090-111-1111",
    company: {
      name: "●●商事"
    },
    website: "http://hogehoge.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>Usersページです</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

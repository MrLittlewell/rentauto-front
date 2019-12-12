import styled from 'styled-components'

export const ListItems = styled.ul`
background: #fefefe;
display: flex;
justify-content: space-between;
height: 100px;
border-radius: 10px;
align-items: center;
padding: 0 30px;
margin-top: -50px;
box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);
list-style: none;
`
export const ListItem = styled.li`
    font-weight: bold; 
    padding: 5px 10px;
    text-align: center;
    display: flex;
    transition: .25s;
    height: 60px;
    align-items: center;
    justify-content: center;
&:hover {
  background: #FAF9FD;
  border-radius: 30px;
}

`
export const ListItemLink = styled.a`
color: #034150;
&:hover {
  color: #034150;
}
`
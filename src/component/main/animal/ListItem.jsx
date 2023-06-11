import {Link} from 'react-router-dom'
const ListItem = ({name, key, id}) => {

  let sortedName;
  if(name?.length > 5){
    sortedName = `${name?.slice(0, 6)}...`
  } else{
    sortedName = name;
  }
  return (
    <Link to={`${id}`} className="list-item" key={key}>
      <p>{sortedName}</p>
    </Link>
  )
}

export default ListItem

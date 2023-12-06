function Singleuser({user}) {

  return (
    <h3>{"Company: " + user.company.name + "/ " + "Email: " + user.email + "/ " + "Phone: " + user.phone}</h3>
  )
}

export default Singleuser

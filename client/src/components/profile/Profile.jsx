import { useContext } from "react";
import { AuthContext } from "../../lib/context/AuthContext";

const Profile = () => {
	const { user } = useContext(AuthContext)
	//console (user)
	return (
		<>
		<div>
			circulo de referencia de imagen
		</div>
		 <div>
      <h2>Perfil de {user?.name}</h2>
      <p>Email: {user?.email}</p>
    </div>
	<button>edit profile</button>
	<button>sign out</button>
		</>
	);
};

export default Profile
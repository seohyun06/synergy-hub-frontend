import { useNavigate, useSearchParams } from "react-router-dom";
import { ROUTES } from "../../global/Links";

const OAuth2Redirect = () => {
    const navigate = useNavigate();

    const OAuth2JwtHeaderFetch = async () => {
        const [queryParams] = useSearchParams();
        try {
            const response = await fetch(ROUTES.JWTHEADER.link, {
                method: "POST",
                credentials: "include",
            });

            if (response.ok) {
                const token = response.headers.get("Authorization"); 
                if (token) {
                    const jwtToken = token.split(" ")[1]; 
                    localStorage.setItem("accessToken", jwtToken);
                }
            } else {
                alert('접근할 수 없는 페이지입니다.');
            }
            navigate('/', { replace: true });
        } catch (error) {
            console.log("error: ", error);
        }
    }

    // request access token in header using httpOnly cookie, and set access token to local storage
    OAuth2JwtHeaderFetch();
    return;
};


export default OAuth2Redirect;
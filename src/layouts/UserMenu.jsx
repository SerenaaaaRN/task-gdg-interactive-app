import { useNavigate } from "react-router-dom";
import userImg from "../assets/user.png";
import Button from "../components/ui/Button";
import { useAuth } from "../hooks/useAuth";
import { User } from "lucide-react";

const UserMenu = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <Button
        variant="outline"
        onClick={() => navigate("/login")}
        className="hidden sm:flex items-center gap-x-2 rounded-full"
      >
        Login <User className="text-lg" />
      </Button>
    );
  }

  return (
    <div className="group relative ml-2">
      <div className="cursor-pointer transition-transform hover:scale-105">
        <img src={userImg} alt="Profile" className="h-10 w-10 rounded-full border border-border object-cover" />

        {/* Dropdown Menu */}
        <ul className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 bg-white p-2 w-40 border border-border rounded-xl absolute right-0 top-full mt-2 flex flex-col text-sm font-medium shadow-xl z-50">
          <li
            onClick={() => navigate("/my-orders")}
            className="p-3 rounded-md hover:bg-secondary cursor-pointer transition-colors"
          >
            My Orders
          </li>
          <li
            onClick={() => setUser(null)}
            className="p-3 rounded-md hover:bg-red-50 text-red-600 cursor-pointer transition-colors border-t border-gray-50"
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;

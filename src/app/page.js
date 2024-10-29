import { FaBeer } from "react-icons/fa";
import Button from "@/components/Button";
import Cookies from "@/components/Cookies";
export default function Home() {
  return (
    <div>
      <FaBeer className="icon" />
      <Button />
      <div class="cookie-container">
        <Cookies />
      </div>
    </div>
  );
}

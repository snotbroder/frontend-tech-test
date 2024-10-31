import { FaBeer } from "react-icons/fa";
import Button from "@/components/Button";
import Cookies from "@/components/Cookies";
import TailwindCard from "@/components/Tailwind-Card";
import "./style.css";
import If from "@/components/If";
export default function Home() {
  let cookiesAccepted = true;
  return (
    <div>
      <div class="hide">
        <FaBeer className="icon" />
        <Button />
      </div>
      <div class="cookie-container">
        {/* Conditional rendering */}
        <If condition={cookiesAccepted}>
          <Cookies />
        </If>
      </div>
      <TailwindCard />
    </div>
  );
}


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
const QuotePage = () => {
  return (
    <>
    <Navigation/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-luxury mb-10">
        Get Your Insurance Quote
      </h1>
      <p className="text-muted-foreground mb-12">
        Choose the type of insurance you want to calculate a quote for:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        <Link to="/Businessquote">
          <Button className="btn-matrix w-full">Business Insurance</Button>
        </Link>
        <Link to="/Rentalquote">
          <Button className="btn-matrix w-full">Rental Insurance</Button>
        </Link>
        <Link to="/Homequote">
          <Button className="btn-matrix w-full">Home Insurance</Button>
        </Link>
        <Link to="/Carquote">
          <Button className="btn-matrix w-full">Car Insurance</Button>
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  );
};


export default QuotePage;


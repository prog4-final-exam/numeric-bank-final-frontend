import React, { useState, useEffect, useContext } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { BiWallet, BiDollar, BiIntersect } from "react-icons/bi";
import "../../nav/navDashCss/content.css";
import { Button } from "@material-tailwind/react";
import PieChartBalance from "../../piechart/PieChartBalance";
import { useParams } from "react-router-dom";
import { fetchBalance } from "../../../services/ApiAcount";

const ProfileContent = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchSingle = async () => {
      const response = await fetchBalance(id);
      setData(response);
    };

    fetchSingle();
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-end dashboard--content content">
      <div className="bg-red-700 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-cyan-50">Profil</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* Solde principal */}
          <div className="w-full p-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4">
                <div className="flex items-center">
                  <BiWallet className="text-gray-700 text-2xl mr-2" />
                  <span className="text-gray-700 text-lg">
                    Principal balance
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-lg">{data.mainBalance}</p>
              </div>
            </div>
          </div>
          {/* Prêts */}
          <div className="w-full p-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4">
                <div className="flex items-center">
                  <BiDollar className="text-gray-700 text-2xl mr-2" />
                  <span className="text-gray-700 text-lg">Loans</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-lg">{data.loanAmount}</p>
              </div>
            </div>
          </div>
          {/* Intérêts des prêts */}
          <div className="w-full p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4">
                <div className="flex items-center">
                  <BiIntersect className="text-gray-700 text-2xl mr-2" />
                  <span className="text-gray-700 text-lg">
                    Interest on loans
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-lg">{data.loanInterest}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="date-picker"
            className="block text-sm font-bold text-cyan-50"
          >
            Select a date to view the balance:
          </label>
          <Datepicker className="border-0" />
          <div className=" text-cyan-50 font-semibold">
            {data.balanceDatetime}
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 m-9">
          <Button color="purple" ripple={true}>
            Virement
          </Button>
          <Button color="amber" ripple={true}>
            Approvisionnement de solde
          </Button>
        </div>
      </div>
      {/* Intégration du PieChartBalance */}
      <PieChartBalance />
    </div>
  );
};

export default ProfileContent;

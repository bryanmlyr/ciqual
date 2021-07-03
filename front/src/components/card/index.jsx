import { GiFullPizza, GiChocolateBar, GiChickenOven } from 'react-icons/gi';

import './index.css';

const Card = ({ data }) => {

    if (!data) {
        return null;
    }

    return (
        <div className="bg-gray-100 rounded-lg w-full card-container p-4 shadow-sm border border-gray-400 border-opacity-40	">
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-medium text-gray-900">{data._source.alim_nom_eng}</h1>
                <span className="text-sm text-blue-800 hover:text-blue-300 cursor-pointer">Details</span>
            </div>
            <h1 className="text-md font-light text-gray-700">{data._source.alim_grp_nom_eng}</h1>
            <hr className="my-4" />
            <div className="flex flex-col w-full gap-4">
                <div className="flex flex-row">
                    <GiFullPizza className="mr-6 text-4xl text-gray-800" />
                    <div className="flex flex-col">
                        <span className="font-bold uppercase tracking-wide text-gray-700">Fat</span>
                        <span className="text-xs ">{`${data._source["Fat (g/100g)"]} (g/100g)`}</span>
                    </div>
                </div>
                <div className="flex flex-row">
                    <GiChocolateBar className="mr-6 text-4xl text-gray-800" />
                    <div className="flex flex-col">
                        <span className="font-bold uppercase tracking-wide text-gray-700">Sugar</span>
                        <span className="text-xs">{`${data._source["Carbohydrate (g/100g)"]} (g/100g)`}</span>
                    </div>
                </div>
                <div className="flex flex-row">
                    <GiChickenOven className="mr-6 text-4xl text-gray-800" />
                    <div className="flex flex-col">
                        <span className="font-bold uppercase tracking-wide text-gray-700">Protein</span>
                        <span className="text-xs">{`${data._source["Protein (g/100g)"]} (g/100g)`}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Card };
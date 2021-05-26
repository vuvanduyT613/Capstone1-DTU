import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { rootState } from 'store/reducers';
export default function CardSocialTraffic() {
  const { data } = useSelector((state: rootState) => state.userReducer.getAllUser);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">Doctors</h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <Link to="/admin/doctor">
                <button
                  className="bg-lightBlue-500 h-10 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  View all
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
            </thead>
            <tbody>
              {
                //@ts-ignore
                data.results ? (
                  // @ts-ignore
                  data.results.map((value, index) => (
                    <tr>
                      <th className=" flex border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        <img className="h-16 w-16 rounded-full" src={value.avatar} />
                        <div className="items-content m-4">
                          <p>Mr. {value.userName}</p>
                          <p className="text-lightBlue-600">
                            {value.city}, {value.country}
                          </p>
                        </div>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2">50%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                              <div
                                style={{ width: '60%' }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <></>
                )
              }
            </tbody>
            <div className="thead-light w-full">
              <tr></tr>
            </div>
          </table>
        </div>
      </div>
    </>
  );
}

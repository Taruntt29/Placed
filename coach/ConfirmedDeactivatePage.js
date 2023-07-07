import React, { useState } from "react";

const ConfirmedDeactivatePage = () => {
  return (
    <div>
      <div className="bg-inputcolor pb-5 lg:px-0 px-5">
        <div className="">
          <div className=" py-16">
            <div className="mx-auto max-w-[1150px]">
              <div className="container mx-auto ">
                <div
                  className="rounded-md lg:w-[80%] w-full bg-white lg:p-10 p-5 mx-auto"
                  style={{ boxShadow: "0px 6px 11px #00000029" }}
                >
                  <div className="flex flex-col justify-center items-center mx-auto">
                    <h4 className="font-s-medium text-xl">
                      Do you want to deactivate your account?
                    </h4>
                    <p className="text-center py-3">
                      You have been unsubscribed from all emails. To reactivate
                      your account, just log in again at any time, using the
                      same email and password.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedDeactivatePage;

import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 h-screen w-screen flex items-center justify-center z-50">
      <div className="flex items-center justify-center flex-col gap-4">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-mainColor"></div>
        <p className="text-mainColor font-medium">Please wait...</p>
      </div>
    </div>
  );
};

export default Loading;

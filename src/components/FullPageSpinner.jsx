const FullPageSpinner = () => {
  return (
    <div className=" fixed inset-0 z-10 flex h-dvh w-dvw items-center justify-center bg-slate-900">
      <div className=" block h-20 w-20 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
    </div>
  );
};

export default FullPageSpinner;

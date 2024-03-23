const Archive = ({ data }: { data: any }) => {
  return (
    <div className="bg-gray-100 flex flex-col gap-4 p-4 min-h-screen pt-20">
      {data?.map((item: any) => (
        <p className="p-1 border border-rose-500">{item.title}</p>
      ))}
    </div>
  );
};

export default Archive;

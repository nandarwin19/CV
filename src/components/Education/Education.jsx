import { MdWork } from "react-icons/md";

const Education = () => {
  return (
    <div className="mb-8">
      <div className="w-full  bg-[#585454] p-2 text-white relative flex items-center">
        <MdWork className="w-10 h-10 border border-[#474444] rounded-full p-2 absolute bg-white text-[#474444]" />

        <p className="text-2xl font-bold ml-14 uppercase">Work Experiences</p>
      </div>
      <div className="ml-16 mt-4">
        <div className="flex gap-8">
          <p className="font-bold">2015-2016</p>
          <div className="flex flex-col gap-1">
            <p className="font-bold">Company Name</p>
            <p>Position</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
              perferendis odit voluptatibus debitis illum. Et nam tempore
              inventore obcaecati minima assumenda. Deleniti sint dignissimos
              quidem consequatur eveniet fugiat ut modi neque possimus aut. Sed
              quasi facere quod recusandae totam nesciunt eius placeat beatae.
              Atque voluptates laboriosam ipsam et dolores reprehenderit!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

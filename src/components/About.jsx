import React from "react";

const About = () => {
  return (
    <div name="About" className="w-full h-screen bg-gradient-to-b from-gray-800 via-gray-800 to-black text-white pb-[25%] ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          error veritatis qui voluptatum veniam quod ex laborum, tenetur totam
          adipisci, dolor vitae fuga optio et autem voluptatibus? Nihil
          exercitationem nesciunt iste, beatae natus, libero ad debitis tempore
          enim voluptatum illo, explicabo obcaecati eligendi provident iusto
          impedit odit facere delectus commodi.
        </p>

        <br/>

        <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo dicta, pariatur aut quaerat vel fuga voluptatum ipsa optio repellat illo molestiae aperiam! Amet adipisci aspernatur distinctio ullam ea fugit doloribus sequi maiores nostrum aperiam, illo laboriosam qui aliquam sapiente esse corrupti eligendi praesentium ipsam reiciendis. Beatae delectus velit non!</p>
      </div>
    </div>
  );
};

export default About;

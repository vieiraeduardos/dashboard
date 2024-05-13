import type { NextPage } from "next";
import VLibras from "vlibras-nextjs";

const Accessibility: NextPage = () => {
  return (
	  <div>
		{/* only worked in production in tests with nextjs applications maybe you can solve this! */}
		<VLibras />
    </div>
  );
};

export default Accessibility;
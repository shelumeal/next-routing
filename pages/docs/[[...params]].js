import { useRouter } from "next/router";

function Doc() {
  const rounter = useRouter();
  const { params = [] } = rounter.query;

  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>;
  }

  return (
    <div>
      <h1>Doc home page</h1>
    </div>
  );
}

export default Doc;

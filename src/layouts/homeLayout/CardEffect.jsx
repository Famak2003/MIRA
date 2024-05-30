export function CardEffect({ dispayMenu }) {
  return (
    <>
      <div
        className={` absolute inset-0 z-[-1] bg-medium-gray ${
          dispayMenu ? " sm:rotate-[-3deg] rotate-[-4deg] rounded-3xl" : ""
        }  delay-[550ms] duration-300 `}
      >
        {" "}
      </div>
      <div
        className={` absolute inset-0 z-[-2]  bg-light-medium-gray ${
          dispayMenu ? " sm:rotate-[-5deg] rotate-[-8deg] rounded-3xl" : ""
        }  delay-[600ms] duration-300 `}
      >
        {" "}
      </div>
    </>
  );
}

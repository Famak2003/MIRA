export function CardEffect({ showMenu }) {
  return (
    <>
      <div
        className={` absolute inset-0 z-[-1] bg-medium-gray ${
          showMenu ? " sm:rotate-[-3deg] rotate-[-4deg] rounded-3xl" : ""
        }  delay-[550ms] duration-300 `}
      >
        {" "}
      </div>
      <div
        className={` absolute inset-0 z-[-2]  bg-light-medium-gray ${
          showMenu ? " sm:rotate-[-5deg] rotate-[-8deg] rounded-3xl" : ""
        }  delay-[600ms] duration-300 `}
      >
        {" "}
      </div>
    </>
  );
}

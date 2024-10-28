import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <>
      <div />
      <div
        id={id}
        className={`
      relative 
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-34" : ""}`
      } 
      ${className || ""}`}
      >
        {children}

        <div className="hidden absolute top-0 bo left-5 w-0.25 h-full bg-n-3 pointer-events-none md:block lg:left-7.5 xl:left-10" />
        <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-n-3 pointer-events-none md:block lg:right-7.5 xl:right-7.5" />

        {crosses && (
          <>
            <div
              className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-n-3 ${
                crossesOffset && crossesOffset
              } pointer-events-none lg:block xl:left-10 right-10`}
            />
            <SectionSvg crossesOffset={crossesOffset} />
          </>
        )}
      </div>
    </>
  );
};

export default Section;

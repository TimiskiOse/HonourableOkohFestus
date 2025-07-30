import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const aboout = () => {
  return (
    <>
      <Navbar />

      <div className="bg-[#1AA4DF] h-[340px] flex items-center justify-center">
        <p className="text-white font-playfair font-extrabold text-6xl text-center py-4">
          THE DEPUTY LEADER OF THE HOUSE <br /> IKA SOUTH CONSTITUENCY <br />
          DELTA STATE HOUSE OF ASSEMBLY
        </p>
      </div>
      {/*INTRODUCTION SECTION*/}
      <div className="flex flex-row justify-between items-center mt-10 mx-20">
        <img
          src="/Honourable.svg"
          alt="Okoh Festus Chukwuyem"
          className="w-96 h-96  object-cover rounded-full"
        />
        <div className="flex flex-col justify-center items-start w-[40%]">
          <div>
            <h1 className="text-3xl font-playfair font-bold mb-2">
              Hon. Okoh Festus Chukwuyem
            </h1>
            <p className="text-lg font-playfair font-medium text-[#1AA4DF]">
              Deputy Majority Leader
            </p>
          </div>
          <p className="text-sm font-playfair mt-4">
            Hon. Okoh Festus Chukwuyem, was born on January 29th, 1971, and I am
            a Nigerian <br /> politician currently serving as the Deputy
            Majority Leader of the Delta State House of Assembly.
            <br /> I represent the Ika South Constituency under the Peoples
            Democratic Party (PDP).
          </p>
        </div>
      </div>

      {/*ABOUTME SECTION*/}
      <div className="flex flex-row justify-between mx-20 my-20 font-playfair">
        <div className="flex flex-col w-[40%]">
          <div className="mb-20">
            <p className="text-2xl font-semibold">The Formative Years</p>
            <p className="text-sm mt-2">
              Hon. Okoh Festus Chukwuyem Okoh, A.K.A Chuky Dandy was born into
              the family of Mr. & Mrs. Anthony E. Okoh from Ogbesoban Quarter,
              Agbor-Obi, Delta State.
            </p>

            <p className="text-sm mt-2">
              He attended Nosheri Primary School from 1976 to 1981 before
              proceeding to Ika Grammar School from 1982 to 1987. Thereafter, he
              retook his SSCE examination in Omumu, 1991/1992.
            </p>

            <p className="text-sm mt-2">
              In 1992, he gained admission into the Delta State University to
              study Economics where he graduated in 1998. He holds a Master
              Degree in Energy and Petroleum Economics from 2015 - 2016 from the
              Delta State University.
            </p>

            <p className="text-sm mt-2">
              Hon. Chukwuyem Okoh Festus later left for the National Youths
              Service Corps (NYSC) and served from 1998 - 1999 before leaving
              for abroad in the year 2000.
            </p>
          </div>

          <div className="">
            <p className="text-2xl font-semibold">
              The Start of a Political Journey
            </p>
            <p className="text-sm mt-2">
              After a life abroad, Hon. FESTUS Chukwuyem in 2009 was appointment
              the First Member, Nigeria Federal Board of Mine and Steels,
              Kaduna.
            </p>
            <p className="text-sm mt-2">
              In 2011, he contested for the Ika Federal Constituency, House of
              Representatives, but, didn't emerge.
            </p>
            <p className="text-sm mt-2">
              In 2012, he was appointed as the Special Adviser to the Deputy
              Senate President, Nigeria Senate.
            </p>
            <p className="text-sm mt-2">
              In 2015, Hon. FESTUS Chukwuyem contested for the Ika South
              Constituency, Delta State House of Assembly, which by the grace of
              God, won meritoriously, duly voted by the people.
            </p>

            <p className="text-sm mt-2">
              Before he came into Politics, Hon. Festus Okoh has featured in
              areas of empowerment, not only to the people of his constituency,
              but across Delta State.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between w-[40%]">
          <div className="mb-20">
            <p className="text-2xl font-semibold">
              A Force for Unity, not Division.
            </p>
            <p className="text-sm mt-2">
              He has continued to sponsor people towards emancipation;
              scholarships for Ika Students both at the Secondary and Tertiary
              institutions, an initiative that has lasted for over 10 years.
            </p>
            <p className="text-sm mt-2">
              He has equally sponsored a lot of people abroad, some for studies
              and some for white coller jobs.
            </p>
            <p className="text-sm mt-2">
              Furthermore, Hon. Festus Okoh, elected as the Member representing
              Ika South Constituency in the Delta State House of Assembly, has
              attracted numerous projects, including roads to his constituency:
              like Ewere Close; Igumbor Street; Ogbowi Street; Obi Street; Odion
              Street, and many others respectively.
            </p>
            <p className="text-sm mt-2">
              However, in Abavo, he built 6 Class rooms for Allohen Primary
              School that also attracted link road.
            </p>
            <p className="text-sm mt-2">
              Since he came into power, he has given over 20 persons admission
              into Delta State University and more than 20 persons for admission
              into Delta State School of Nursing, Agbor.
            </p>
            <p className="text-sm mt-2">
              Ika Students each. In 2017, he gave out scholarship of N50,000 to
              120
            </p>
          </div>

          <div>
            <p className="text-2xl font-semibold">Trained for Service</p>
            <p className="text-sm mt-2">
              Hon. Festus Okoh has been a Key player in the growth of his party
              PDP, IKA NATION & Delta State at large; thereby distinguishing
              himself in the areas of law making.
            </p>
            <p className="text-sm mt-2">
              First of its kind in the history of politics in Ika South, he has
              donated more than 10 cars to his people, and he has over 50
              persons in his payroll amounting to millions of Naira as a support
              for their families and towards the growth of their businesses.
            </p>
            <p className="text-sm mt-2">
              Interestingly, through him, more than 200 persons have benefited
              from the SMART agenda of the Delta State Government youths
              empowerments programme. Since he attained
            </p>
            <p className="text-sm mt-2">
              office in 2015, Hon. Festus Okoh has maintained regular
              empowerments to his people, empowering several youths, widows and
              the less privileged; an attribute which is incredibly remarkable.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default aboout;

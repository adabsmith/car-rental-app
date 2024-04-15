import Card from "./Card";
import ceo1 from "./ceo1.jpg";
import Salee from "./Salee.jpg";
import opr from "./opr.jpg";
import staff from "./staff.jpg";
import srep from "./srep.jpg";
import lady from "./lady.jpg";
import CEO from "./CEO.jpg"


function Team() {
  return (
    <section className="my-5">
        <h2 className="h1 mb-5">Meet The Team</h2>
      <div className="container mt-24">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        <Card
            img={CEO}     
            name="Micheal Hallender"
            job="CEO"
          />
          <Card
            name="Devon Klenjan, OALA, CSLA"
            job="Branch Manager"
            img={ceo1}
          />
          <Card
            img={staff}     
            name="Kim Lee"
            job="Customer Service Representative"
          />
          <Card
            img={Salee}
            name="Melissa Ralph, CPA, CA"
            job="Financial Manager"
          />
          <Card
            img={opr}
            name="Dan Brown"
            job="Fleet Manager"
          />
          <Card
            img={srep}
            name="Fatima Smith"
            job="Marketing Coordinator"
          />
          {/* <Card
            img={lady}
            name="Jane Arron"
            job="Sales Representative"
          /> */}
          
        </div>
      </div>
    </section>
  );
}

export { Team };

import Card from "./Card";
import ceo1 from "./ceo1.jpg";
import Salee from "./Salee.jpg";
import opr from "./opr.jpg";
import staff from "./staff.jpg";


function Team() {
  return (
    <section className="my-5">
        <h2 className="h1 mb-5">Meet The Team</h2>
      <div className="container mt-24">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <Card
            name="Devon Klenjan, OALA, CSLA"
            job="Branch Manager"
            img={ceo1}
          />
          <Card
            img={staff}     
            name="Matte Crossman"
            job="Customer Service Representative"
          />
          <Card
            img={Salee}
            name="Nathan Groat, CPA, CA"
            job="Financial Manager"
          />
          <Card
            img={opr}
            name="David Baartman"
            job="Sales Representative"
          />
        </div>
      </div>
    </section>
  );
}

export { Team };

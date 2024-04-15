import Card from "./Card";
import ceo from "./ceo.jpg";

function Team() {
  return (
    <section className="my-5">
        <h2 className="h1 mb-5">Meet The Team</h2>
      <div className="container mt-24">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <Card
            name="Devon Klenjan, OALA, CSLA"
            job="Sales & Marketing Manager"
            img="https://source.unsplash.com/1600x900/?headshot+female"
          />
          <Card
            img={ceo}       
            name="Matte Crossman"
            job="Project Coordinator"
          />
          <Card
            img="https://placehold.co/600x400?text=card+image+3"
            name="Nathan Groat, CPA, CA"
            job="Financial Manager"
          />
          <Card
            img="https://placehold.co/600x400?text=card+image+4"
            name="David Baartman"
            job="Estimator"
          />
        </div>
      </div>
    </section>
  );
}

export { Team };

import { Link } from 'react-router-dom';

export default function NewList() {
  return (
    <section className="new-list">
      {/* Placing TierList Logic Placeholder for now */}
      <h1>READY TO GET STARTED?</h1>
      <Link to="/tierlist" className="btn">Create Your Own Tier List</Link>
    </section>
  )
}

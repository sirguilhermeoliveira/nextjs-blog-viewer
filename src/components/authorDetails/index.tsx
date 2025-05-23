import { User } from "@/types/user";


export default function AuthorDetails({ email, phone, website, address, company, title, name, username }: User) {
  return (
    <section aria-label="Author details" className="mb-12 p-4 pb-1 bg-blue-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-blue-700 border-b border-blue-600 pb-2 mb-6">
       {title ?? "About the Author"}
      </h2>
    <div className="flex items-start">
      <section aria-label="Contact info" className="mb-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Contact Information</h3>
        {name && <p><strong>Name:</strong> {name}</p>}
        {username && <p><strong>Username:</strong> {username}</p>}
        <p>
          <strong>Email:</strong>{' '}
          <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>
        </p>
        <p><strong>Phone:</strong> {phone}</p>
        <p>
          <strong>Website:</strong>{' '}
          <a href={`http://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {website}
          </a>
        </p>
      </section>

      <section aria-label="Address info" className="mb-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Address</h3>
        <p><strong>Street: </strong>{address.street}, {address.suite}</p>
        <p><strong>City: </strong>{address.city}</p>
        <p><strong>Zip code: </strong>{address.zipcode}</p>
        <p><strong>Coordinates: </strong> {address.geo.lat}, {address.geo.lng}</p>
      </section>

      <section aria-label="Company info">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Company</h3>
        <p className="font-bold">{company.name}</p>
<p className="italic text-gray-600">&quot;{company.catchPhrase}&quot;</p>
        <p>{company.bs}</p>
      </section>
      </div>
    </section>
  );
}

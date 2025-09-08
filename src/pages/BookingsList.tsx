import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";

type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  contactPreference: string;
  createdAt: Date | null;
};

export default function BookingsList() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContacts() {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "contacts")); // ✅ same collection
        const contactData: Contact[] = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
            contactPreference: data.contactPreference,
            createdAt: data.createdAt ? data.createdAt.toDate() : null,
          };
        });
        setContacts(contactData);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
      setLoading(false);
    }

    fetchContacts();
  }, []);

  if (loading) return <p>Loading contacts...</p>;
  if (contacts.length === 0) return <p>No contacts found.</p>;

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h2>All Contacts</h2>
      <ul>
        {contacts.map(({ id, name, email, phone, message, contactPreference, createdAt }) => (
          <li key={id} style={{ marginBottom: 16, padding: 8, border: "1px solid #ccc", borderRadius: 8 }}>
            <strong>{name}</strong> ({email})<br />
            📞 {phone}<br />
            💬 {message}<br />
            Preferred: {contactPreference}<br />
            <small>{createdAt ? createdAt.toLocaleString() : "No date"}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProgrammingLanguagesList({ languages }: { languages: string[] }) {
  if (languages.length === 0) {
    return (
      <div>
        <p>No languages found.</p>
      </div>
    );
  }
  return (
    <section>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </section>
  );
}
export default ProgrammingLanguagesList;

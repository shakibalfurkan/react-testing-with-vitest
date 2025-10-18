function UserStatus({ email }: { email: string }) {
  return (
    <section>
      {email ? <h1>Welcome {email}</h1> : <button>Sign Up</button>}
    </section>
  );
}
export default UserStatus;

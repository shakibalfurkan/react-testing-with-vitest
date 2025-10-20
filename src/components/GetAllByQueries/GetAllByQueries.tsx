function GetAllByQueries() {
  return (
    <section>
      <label htmlFor="input1">Label for input1</label>
      <input
        placeholder="Enter text here"
        id="input1"
        value="Default Value"
        disabled
      />

      <label htmlFor="input2">Label for input2</label>
      <input
        placeholder="Another placeholder"
        id="input2"
        value="Another Value"
        disabled
      />

      <input placeholder="Enter something....." disabled />
      <input placeholder="Enter something else....." disabled />

      <p>This is a paragraph with same content.</p>
      <p>This is a paragraph with same content.</p>

      <input disabled value="Some display value" />
      <input disabled value="Another display value" />

      <img src="image1.png" alt="A simple image" />
      <img src="image2.png" alt="Another simple image" />

      <div title="This is a div with title attribute">
        Div content with title attribute
      </div>
      <div title="Another div with title attribute">Another Div content</div>

      <button role="button" aria-label="This is a button" disabled>
        Disabled button 1
      </button>
      <button role="button" aria-label="This is a button 2" disabled>
        Disabled button 1
      </button>

      <div data-testid="custom-test-id-1">This div has test id 1</div>
      <div data-testid="custom-test-id-2">This div has test id 2</div>
    </section>
  );
}
export default GetAllByQueries;

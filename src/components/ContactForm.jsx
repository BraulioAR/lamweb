'use client';

export function ContactForm() {
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await fetch('/__forms.html', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams(formData).toString()
    });
    // Success & error handling should come here
  };

  return (
       <form name="contactus" action='/contactus/success' onSubmit={handleFormSubmit}>
                <input required type='hidden' name='form-name' value='contactus' />
                <div className="flex flex-row gap-[1.25rem]">
                  <div>
                    <label>
                      Nombre<br /><input
                        required
                        type="text"
                        name="name"
                        className="border rounded-[0.5rem] pt-[0.5rem] pb-[0.5rem] pl-[0.75rem] pr-[0.75rem] w-full focus:outline-none focus:shadow-sm focus:transition-border-03s focus:transition-shadow-03s"
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Email<br /><input
                        required
                        type="email"
                        name="email"
                        className="border rounded-[0.5rem] pt-[0.5rem] pb-[0.5rem] pl-[0.75rem] pr-[0.75rem] w-full focus:outline-none focus:shadow-sm focus:transition-border-03s focus:transition-shadow-03s"
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <label>
                    Mensaje<br />
                    <textarea required
                      name="message"
                      className="border rounded-[0.5rem] pt-[0.5rem] pb-[0.5rem] pl-[0.75rem] pr-[0.75rem] w-full focus:outline-none focus:shadow-sm focus:transition-border-03s focus:transition-shadow-03s"
                    ></textarea>
                  </label>
                </div>
                <div className=" flex justify-end px-[2rem] py-[1rem] items-end">
                  <button
                    className="border px-[2rem] py-[0.5rem] bg-black text-white hover:text-black hover:bg-white transition-color-03s"
                    type="submit">Enviar</button>
                </div>
              </form>
  );
}

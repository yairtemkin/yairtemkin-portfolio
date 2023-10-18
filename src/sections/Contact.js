import '../styles/App.css';
import contact from '../json-data/contact.json';

function Contact() {

  function copyNumber() {
    navigator.clipboard.writeText(contact.number);
  }

  function copyLinkedIn() {
    window.open(contact.linkedin);
  }

  return (
    <div className='bg-contactus flex flex-col pt-4 pb-8 md:pb-4 lg:pb-4' id="contact">
      <div className="flex flex-col md:ml-32 md:mr-32 lg:ml-32 lg:mr-32">
        <h2 className=' font-sans font-semibold text-3xl lg:text-7xl md:text-7xl text-white ml-6 mt-6'> Contact Me </h2>
        <div className="flex flex-col items-center justify-center m-12">
          <span className="flex flex-row items-center">
            <svg className="fill-white mr-2 " width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
              <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376" />
            </svg>
            <p className="font-sans font-semibold lg:text-3xl md:text-3xl text-white cursor-pointer"> <a href={`tel:${contact.phone}`}>{contact.number}</a> </p>
          </span>
          <span className="flex flex-row items-center"><svg className="fill-white mr-2 " width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" /></svg>  <p className="font-sans font-semibold md:text-3xl lg:text-3xl text-white cursor-pointer"> <a href={`mailto:${contact.email}`}> {contact.email} </a> </p> </span>
          <span className="flex flex-row items-center"> <svg className="fill-white mr-2 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> <p className="font-sans font-semibold md:text-3xl lg:text-3xl text-white cursor-pointer" onClick={() => copyLinkedIn()}> {contact.linkedin} </p>  </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
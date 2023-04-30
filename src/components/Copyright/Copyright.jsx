import "./Copyright.scss";

const currentYear = new Date().getFullYear(); // Get the current year

const copyrights = () => {
  return (
    <div class="copyright">
      &copy; <span id="current-year">{currentYear}</span> Your Company Name. All
      Rights Reserved.
    </div>
  );
};

export default copyrights;

const Nodal = ({ TSP, PA }) => {
    // Keeping inline styles due to specificity.
    const styles = {
        fontWeight: 600
    }
    return (
        <div className="nodal-container">
            <p>Nodal Officer </p>
            <br />
            <div className="nodal-officers-container">
                {TSP && <div>
                    <p style={styles}>Varsha Deiveegan - Technical Service Provider(TSP)</p>
                    {/* <br /> */}
                    {/* <p>Mr. Utkarsh Srivastava</p> */}
                    <p>Decentro Tech Private Limited</p>
                    <br />
                    <p>
                        ADDRESS: 461, Shri Krishna Temple Rd, Indira Nagar 1st Stage,
                        Stage 1, Indiranagar,{" "}
                    </p>
                    <p>Bengaluru, Karnataka 560038</p>
                    <p>Phone No: 9513030099</p>
                    <p>E-mail: grievances@decentro.tech</p>
                </div>}
                <br />
                {PA && <div>
                    <p style={styles}>Shivam Gupta - Payment Aggregation & Collections</p>
                    {/* <br /> */}
                    {/* <p>Mr. Utkarsh Srivastava</p> */}
                    <p>DECFIN Tech Private Limited </p>
                    <br />
                    <p>
                        ADDRESS: 461, Shri Krishna Temple Rd, Indira Nagar 1st Stage,
                        Stage 1, Indiranagar,{" "}
                    </p>
                    <p>Bengaluru, Karnataka 560038</p>
                    <p>Phone No: 8860594199</p>
                    <p>E-mail: nodal@decentro.tech</p>
                </div>}
            </div>
        </div>
    )
}
export default Nodal;
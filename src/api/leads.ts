import axios from 'axios';

class LeadService {


    async leadCapturing(
        idnumber: string,
        email: string,
        firstnames: string,
        surname: string,
        cellular: string
    ): Promise<any> {
        try {
            const headers = {
                Authorization: 'Bearer YOUR_AUTH_TOKEN', 
                Tenant: 'LME',
                'Content-Type': 'application/x-www-form-urlencoded',
              };
            const response = await axios.post(
              'https://limeloans.runaloan.com/ralapi-leads/lead',
              new URLSearchParams(        
                        {
                            idnumber,
                            email,
                            firstnames,
                            surname,
                            cellular
                        }),{headers}
            )
            if (response.status === 200) {
              console.log('API working')
            } else {
              
            }
          } catch (error) {
            console.error(error);
           
          }
        // try {
        //     const res = await axios.post(
        //         this.LEAD_URL,
        //         {
        //             idnumber,
        //             email,
        //             firstnames,
        //             surname,
        //             cellular
        //         },
        //         {
        //             headers: {
        //                 'Authorisation': 'ZaoLgElAJuWJKBa0u2r2',
        //                 'Tenant': 'LME',
        //                 'Content-Type': 'application/json'
        //             }
        //         }
        //     );
        //     console.log(this.authorization, this.LEAD_URL, idnumber, email, firstnames, surname, cellular)
        //     return res;
        // } catch (err) {
        //     console.error('Error capturing lead:', err);
        //     throw err;
        // }
    }
}

export default LeadService;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {  UserPlus } from "lucide-react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { LeadDetailValidator, TLeadDetailValidator } from "@/lib/validators/lead-detail-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
//import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import LeadService from "@/api/leads";
import { toast } from "sonner";
import { Link } from "react-router-dom";

function FormLead(){

    const [isSubmitting, setIsSubmitting] = useState(false);
    const leadService = new LeadService();

    const onSubmitDetails = async (data: TLeadDetailValidator) => {
        
        console.log(data);
        if(isSubmitting) return;
        
        setIsSubmitting(true);

    
        try {
            const leadRes = await leadService.leadCapturing(
                data.idnumber,
                data.email,
                data.firstnames,
                data.surname,
                data.cellular
            );
            
            const leadData = leadRes.data;

            console.log(leadData);

    
            
        } catch (err: any) {
            const errMessageObj = err.response.data;
    
            if (errMessageObj && errMessageObj.detail) {
                toast.error(errMessageObj.detail.message);
                return;
            } else {
                toast.error('Invalid user credentials');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const form = useForm<TLeadDetailValidator>({
        resolver: zodResolver(LeadDetailValidator),
        defaultValues: {
            idnumber: "",
            firstnames: "",
            surname: "",
            cellular: "",
            email: "",
        },
    });

    return(
        <Card className="w-[800px]">
            <CardHeader className="px-6">
                <CardTitle className="text-[1.3rem] flex items-center">
                    <UserPlus className='mr-2 h-5 w-5' />
                    Add Lead
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">Share where you've worked on your profile</CardDescription>
            </CardHeader>
            <CardContent className="max-h-[98%] overflow-hidden px-0">
            <div className="flex-1 overflow-y-auto px-6 py-6">
            <Form {...form}>
                <form
                onSubmit={form.handleSubmit(onSubmitDetails)}
                className="relative space-y-3 overflow-x-hidden"
                >
                    <div className="flex justify-center items-center gap-3 py-2">
                    
                        <div className="w-full space-y-2">
                        <FormField
                            control={form.control}
                            name="idnumber"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>ID number</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter ID number.." {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-3 py-1">
                    <div className="w-full space-y-2">
                        <FormField
                            control={form.control}
                            name="firstnames"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="First Name number.." {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        </div>
                        <div className="w-full space-y-1">
                        <FormField
                            control={form.control}
                            name="surname"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Surname</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Surname.." {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-3 py-1">
                    <div className="w-full space-y-2">
                        <FormField
                            control={form.control}
                            name="cellular"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Cellular</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Cellular.." {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        </div>
                        <div className="w-full space-y-1">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Email.." {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        </div>
                    </div>

                   
                    {/* <Link className="mt-5" to={'/success'}> */}
                        <Button className="mt-5" >
                            Submit
                        </Button>
                    {/* </Link> */}
                     
                </form>
            </Form>
            </div>
            </CardContent>

        </Card>
    )
}

export default FormLead;
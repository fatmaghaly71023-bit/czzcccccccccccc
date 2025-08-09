import { supabase } from "@/integrations/supabase/client";

export interface CSVCustomer {
  id: number;
  customer_name: string;
  mobile_number: number;
  line_type: number;
  charging_date: string | null;
  payment_status: string | null;
  monthly_price: number | null;
  renewal_status: string | null;
}

export const importCSVCustomers = async () => {
  const csvData: CSVCustomer[] = [
    {
      id: 79,
      customer_name: "7ossam",
      mobile_number: 1119022947,
      line_type: 60,
      charging_date: "5-Aug",
      payment_status: "paid",
      monthly_price: 275,
      renewal_status: null
    },
    {
      id: 80,
      customer_name: "7ossam",
      mobile_number: 1125727842,
      line_type: 60,
      charging_date: "5-Aug",
      payment_status: "paid",
      monthly_price: 275,
      renewal_status: null
    },
    {
      id: 81,
      customer_name: "7ossam",
      mobile_number: 1148615687,
      line_type: 60,
      charging_date: "1-Aug",
      payment_status: "paid",
      monthly_price: 275,
      renewal_status: null
    },
    {
      id: 82,
      customer_name: "abo selem",
      mobile_number: 1507708813,
      line_type: 60,
      charging_date: "30-Jul",
      payment_status: null,
      monthly_price: 1500,
      renewal_status: null
    },
    {
      id: 83,
      customer_name: "abo selem",
      mobile_number: 1507708821,
      line_type: 60,
      charging_date: "29-Jul",
      payment_status: null,
      monthly_price: null,
      renewal_status: null
    },
    {
      id: 84,
      customer_name: "abo selem",
      mobile_number: 1507708873,
      line_type: 60,
      charging_date: "30-Jul",
      payment_status: null,
      monthly_price: null,
      renewal_status: null
    },
    {
      id: 85,
      customer_name: "abo selem",
      mobile_number: 1507708875,
      line_type: 60,
      charging_date: "30-Jul",
      payment_status: null,
      monthly_price: null,
      renewal_status: null
    },
    {
      id: 86,
      customer_name: "abo selem",
      mobile_number: 1508808871,
      line_type: 60,
      charging_date: "29-Jul",
      payment_status: null,
      monthly_price: null,
      renewal_status: null
    },
    {
      id: 87,
      customer_name: "abo selem",
      mobile_number: 1148340194,
      line_type: 60,
      charging_date: "5-Aug",
      payment_status: null,
      monthly_price: null,
      renewal_status: null
    },
    {
      id: 88,
      customer_name: "abo selem",
      mobile_number: 1159210913,
      line_type: 60,
      charging_date: "5-Aug",
      payment_status: null,
      monthly_price: null,
      renewal_status: null
    },
    {
      id: 89,
      customer_name: "abo selem",
      mobile_number: 1501900772,
      line_type: 60,
      charging_date: "31-Aug",
      payment_status: null,
      monthly_price: null,
      renewal_status: null
    },
    {
      id: 90,
      customer_name: "abo selem",
      mobile_number: 1501700688,
      line_type: 60,
      charging_date: "25-Jul",
      payment_status: null,
      monthly_price: null,
      renewal_status: null
    },
    {
      id: 91,
      customer_name: "abo selem",
      mobile_number: 1108958468,
      line_type: 60,
      charging_date: null,
      payment_status: null,
      monthly_price: null,
      renewal_status: null
    },
    {
      id: 92,
      customer_name: "abo selem",
      mobile_number: 1156361393,
      line_type: 60,
      charging_date: null,
      payment_status: null,
      monthly_price: null,
      renewal_status: null
    },
    {
      id: 93,
      customer_name: "abo selem",
      mobile_number: 1148487150,
      line_type: 60,
      charging_date: null,
      payment_status: null,
      monthly_price: null,
      renewal_status: null
    },
    {
      id: 94,
      customer_name: "abo selem",
      mobile_number: 1140875800,
      line_type: 60,
      charging_date: "3-Aug",
      payment_status: null,
      monthly_price: null,
      renewal_status: null
    },
    {
      id: 95,
      customer_name: "ahmed eldeeb",
      mobile_number: 1149904862,
      line_type: 60,
      charging_date: "30-Jul",
      payment_status: null,
      monthly_price: null,
      renewal_status: null
    },
    {
      id: 96,
      customer_name: "ahmed eldeeb",
      mobile_number: 1149923028,
      line_type: 60,
      charging_date: "30-Jul",
      payment_status: null,
      monthly_price: null,
      renewal_status: null
    },
    {
      id: 97,
      customer_name: "hamada zalabany",
      mobile_number: 1507708849,
      line_type: 60,
      charging_date: "24-Jul",
      payment_status: null,
      monthly_price: null,
      renewal_status: null
    },
    {
      id: 98,
      customer_name: "mbadr",
      mobile_number: 1204612686,
      line_type: 60,
      charging_date: "8-Aug",
      payment_status: "paid",
      monthly_price: null,
      renewal_status: null
    },
    {
      id: 99,
      customer_name: "mohammed magdy",
      mobile_number: 1220341335,
      line_type: 60,
      charging_date: "8-Aug",
      payment_status: "paid",
      monthly_price: 275,
      renewal_status: null
    },
    {
      id: 100,
      customer_name: "mohammed magdy",
      mobile_number: 1501900667,
      line_type: 60,
      charging_date: "29-Jul",
      payment_status: "paid",
      monthly_price: 275,
      renewal_status: null
    },
    {
      id: 101,
      customer_name: "mohammed magdy",
      mobile_number: 1148342935,
      line_type: 60,
      charging_date: "6-Aug",
      payment_status: "paid",
      monthly_price: 275,
      renewal_status: null
    },
    {
      id: 102,
      customer_name: "mohammed taha",
      mobile_number: 1156982564,
      line_type: 60,
      charging_date: "1-Aug",
      payment_status: "paid",
      monthly_price: 250,
      renewal_status: null
    },
    {
      id: 103,
      customer_name: "mohammed zawya",
      mobile_number: 1159513703,
      line_type: 60,
      charging_date: "7-Aug",
      payment_status: null,
      monthly_price: null,
      renewal_status: null
    },
    {
      id: 104,
      customer_name: "saeed zidan",
      mobile_number: 1508804088,
      line_type: 60,
      charging_date: "30-Jul",
      payment_status: null,
      monthly_price: null,
      renewal_status: null
    },
    {
      id: 105,
      customer_name: "sameh saeed",
      mobile_number: 1501700664,
      line_type: 60,
      charging_date: "29-Jul",
      payment_status: null,
      monthly_price: null,
      renewal_status: null
    }
  ];

  try {
    // Insert customers one by one to handle conflicts
    const results = [];
    for (const customer of csvData) {
      const { data, error } = await supabase
        .from('cardinfo')
        .upsert(customer, { 
          onConflict: 'id',
          ignoreDuplicates: false 
        })
        .select();

      if (error) {
        console.error(`Error inserting customer ${customer.id}:`, error);
        results.push({ customer: customer.id, success: false, error });
      } else {
        console.log(`Successfully inserted customer ${customer.id}`);
        results.push({ customer: customer.id, success: true, data });
      }
    }

    return results;
  } catch (error) {
    console.error('Error importing CSV customers:', error);
    throw error;
  }
};
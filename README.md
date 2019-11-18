## **Visualize simple continuous signals**
2) 
  a) Configuration of function signal generator to out [Here](https://imgur.com/a/UIp3gI7)
  
  b) Rigol Function Generator video can be found [Here](https://imgur.com/a/YBvrhUo)
  
  c) Emitting PWM video can be found [Here](https://imgur.com/a/ywecla7)



## **I<sup>2</sup>C Warmup:**
3) 
  a. What are the disadvantages of the other two serial communication channels, UART and SPI, and how does I2C improve on them?
    - One of the disadvantages of the two serial communication channels is in its name itself. It can communicate with two devies and onyl those two devices. There is also no clock data, so the devices will have to plan ahead of time the data rate that will be exchanged. 
    
  b. I2C is a two-wire serial communication channel. What are the two wires, SDA and SCL?
    - The SDA wire is to transmit the data signal. 
    - The SLA is used for the clock signal 
    
  c. What distinguishes the master and the slaves?
    - The master at anytime call upon a 'slave device' and read or write data to the slave using their specific address, while the slave can only read or write data only when the master has called or addressed them. 
    
  d. How are the two types of protocol frames different?
    - The address frame will always come first, establishing a new commuincation with a device 
    - After the address has been sent, the data will be sent and placed on the SDA line and read or write data to the master or slave. 
    
  e. What is the most appropriate trigger for capturing an I2C frame on the oscilloscope?
  
  ## **First Steps with I<sup>2</sup>C**
  

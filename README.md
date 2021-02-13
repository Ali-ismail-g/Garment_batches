# Garment_batches

The answer for the question if the producer wants to know the total quantities of T-shirts produced from the same color and size then we have to use aggregation function in mongodb in order to sum values of quantities through ($sum) pipeline but what if we want to group the sum of quantities of the same size and color then we will use another pipeline called ($match) Filters the documents to pass only the documents that match the specified conditions such as(color,size,....) to the next pipeline stage. and we need to use $group to calculate sum across multiple documents.


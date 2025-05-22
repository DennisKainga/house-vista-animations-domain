
import { Skeleton } from "@/components/ui/skeleton";

const PropertySkeleton = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md animate-pulse">
      {/* Image skeleton */}
      <Skeleton className="h-52 w-full" />
      
      {/* Content skeleton */}
      <div className="p-5">
        <Skeleton className="h-7 w-1/2 mb-2" />
        <Skeleton className="h-5 w-4/5 mb-1" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        
        {/* Property specs skeleton */}
        <div className="flex justify-between mt-4 mb-4">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
        </div>
        
        {/* Divider */}
        <div className="border-t my-4" />
        
        {/* Footer skeleton */}
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-8 w-28 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default PropertySkeleton;

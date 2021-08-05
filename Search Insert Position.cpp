// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.


int searchInsert(vector<int>& nums, int target) {
        int left = 0;
        int right = nums.size()-1;
        int mid = -1;
        
        while(1){
            if(mid == (left+right)/2){
                if(target >= nums[mid])
                     mid++;
                break;
            }
            mid = (left+right)/2;
            if(nums[mid]>target)
                right = mid -1;
            else if(nums[mid]<target){
                left = mid + 1;
            }
            else break;
        }
        return mid;
    }

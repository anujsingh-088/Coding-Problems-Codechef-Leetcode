
// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

//You must write an algorithm with O(log n) runtime complexity.

vector<int> searchRange(vector<int>& nums, int target) {
        int left = 0, right = nums.size()-1;
        int start = -1, end = -1;
        vector<int> ans;
        while(left<=right){
            int mid = (left+right)/2;
            if(nums[mid]>target){
                right = mid-1;
            } else if(nums[mid]<target)
                left = mid + 1;
            else{
                start = mid;
                end = mid;
                while(mid >= 0 && nums[mid]==target){
                    start = mid;
                    mid--;
                }
                mid = end;
                while(mid < nums.size() && nums[mid]==target){
                    end = mid;
                    mid++;
                }
                
                break;
            }
        }
        if(start != -1 && end != -1){
            ans.push_back(start);ans.push_back(end);
        } else{
            ans.push_back(-1);ans.push_back(-1);
            
        }
        return ans;
    }

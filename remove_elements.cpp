class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int i=0,q=0;
        while(i<nums.size()){
            if(nums[i] != val){
                nums[q]=nums[i];
                q++;
            }
            i++;
        }
        return q;
    }
};

using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace CRM.Utilities.Reflection
{
    public  class ClassListFactory
    {
        //
        // Create a list containing an instance of all classes with the given interface type
        //
        public  List<T> CreateListOfClassesWithInterface<T>(Assembly assembly)
        {
            var interfaceType = typeof(T);
            var types = assembly.GetTypes().Where(t => interfaceType.IsAssignableFrom(t) && !t.IsInterface);

            var list = new List<T>();

            // ReSharper disable once LoopCanBeConvertedToQuery
            foreach (var type in types)
            {
                list.Add((T)Activator.CreateInstance(type));
            }

            return list;
        }
    }
}
